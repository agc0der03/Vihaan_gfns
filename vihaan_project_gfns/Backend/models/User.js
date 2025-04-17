// import mongoose from 'mongoose';

// const userSchema = new mongoose.Schema({
//   name: String,
//   email: { type: String, unique: true },
//   password: String,
//   investments: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Investment' }]
// });

// export default mongoose.model('User', userSchema);

import mongoose from 'mongoose';

const userSchema = new mongoose.Schema({
  username: { type: String, unique: true },
  password: String
});

export default mongoose.model('User', userSchema);
