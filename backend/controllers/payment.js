const User = require("../schema/user");

const send = async (req, res) => {
    try {
        const senderId = req.user;
        const receiverId = req.params.id;
        const { amount } = req.body;

        // Fetch sender
        const sender = await User.findOne({ _id: senderId });
        if (!sender) {
            return res.status(400).json({ message: "Sender not found" });
        }

        // Fetch receiver
        const receiver = await User.findOne({ _id: String(receiverId) });
        if (!receiver) {
            return res.status(400).json({ message: "Receiver not found" });
        }

        // Check balance
        if (amount > sender.amount) {
            return res.status(400).json({ message: "Insufficient balance" });
        }

        // Perform transfer
        sender.amount -= amount;
        receiver.amount += amount;

        // Save both users
        await sender.save();
        await receiver.save();

        return res.status(200).json({
            message: "Transfer successful",
            senderBalance: sender.amount,
            receiverId: receiver._id
        });

    } catch (error) {
        console.error("Transfer error:", error);
        return res.status(500).json({ message: "Internal Server Error" });
    }
};
const fill=async(req,res)=>{
    try {
        const filter =req.query.filter||"";
        const users = await User.find({
            $or: [
                { firstName: { $regex: filter, $options: 'i' } },  // case-insensitive
                { lastName: { $regex: filter, $options: 'i' } }
            ]
        });
        res.json({
            user: users.map(user => ({
                username: user.username,
                firstName: user.firstName,
                lastName: user.lastName,
                _id: user._id
            }))
        });

    } catch (error) {
        console.error("Error in /bulk route:", error);
        res.status(500).json({ message: "Internal Server Error" });
    }
}

module.exports = {send,fill}