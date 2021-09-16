import * as mongoose from 'mongoose';
import { User } from 'src/interfaces/user.interface';

function transformValue(doc, ret: { [key: string]: any }) {
  delete ret._id;
}

const validateEmail = (email) => {
  return /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email);
};

const validateUsername = (username) => {
  return /[^a-zA-Z0-9]/.test(username);
};

export const UserSchema = new mongoose.Schema<User>(
  {
    email: {
      type: String,
      required: [true, 'Email can not be empty'],
      unique: true,
      lowercase: true,
      validate: [validateEmail, 'Please fill a valid email address'],
    },
    username: {
      type: String,
      required: [true, 'Username can not be empty'],
      minlength: [6, 'Username should include at least 6 chars'],
      validate: [validateUsername, 'Username can not using special character'],
    },
  },
  {
    toObject: {
      virtuals: true,
      versionKey: false,
      transform: transformValue,
    },
    toJSON: {
      virtuals: true,
      versionKey: false,
      transform: transformValue,
    },
    versionKey: '_somethingElse',
  },
);
