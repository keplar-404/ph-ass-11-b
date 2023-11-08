const userSchema = new mongoose.Schema({
  name: { type: String, required: true },
  email: { type: String, required: true },
  profilePicLink: { type: String },
  // booksBorrowed: [
  //   { type: mongoose.Schema.Types.ObjectId, ref: "BorrowedBook" },
  // ],
});

const User = mongoose.model("User", userSchema);
export default User;
