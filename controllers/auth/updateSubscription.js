const {User} = require("../../models/user");

const updateSubscription = async(req,res) => {
    const {_id, email} = req.user;
    const { subscription } = req.body;
    console.log(subscription);
    console.log(_id);
    await User.findByIdAndUpdate(_id, {subscription});

    res.json({
		email,
		subscription,
	});

}

module.exports = updateSubscription;