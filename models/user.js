const { Schema, model } = require("mongoose");

const { handleMongooseError } = require("../helpers");
// eslint-disable-next-line no-useless-escape
const emailRegexp = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;

const userSchema = new Schema(
	{
		password: {
			type: String,
			minlength: 6,
			required: [true, "Set password for user"],
		},
		email: {
			type: String,
			match: emailRegexp,
			unique: true,
			required: [true, "Email is reqoired"],
		},
		subscription: {
			type: String,
			enum: ["starter", "pro", "business"],
			default: "starter",
		},
		token: String,
	},
	{ versionKey: false, timestamps: true }
);

userSchema.post("save", handleMongooseError);

const User = model("user", userSchema);

const Joi = require("joi");

const registerSchema = Joi.object({
	password: Joi.string().min(6).required(),
	email: Joi.string().pattern(emailRegexp).required(),
	subscription: Joi.string(),
});

const loginSchema = Joi.object({
	password: Joi.string().min(6).required(),
	email: Joi.string().pattern(emailRegexp).required(),
});

const updateSubscriptionSchema = Joi.object({
	subscription: Joi.string().valid("starter", "pro", "business"),
})

const schemas = {
	registerSchema,
	loginSchema,
	updateSubscriptionSchema,
};

module.exports = {
	User,
	schemas,
};
