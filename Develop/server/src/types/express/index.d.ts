import { UserDocument } from "../Develop/server/src/models/User"; // Adjust the path to where your User model is located

declare global {
  namespace Express {
    interface Request {
      user?: UserDocument;
    }
  }
}
