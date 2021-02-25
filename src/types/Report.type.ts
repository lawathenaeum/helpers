import { Document, ObjectId } from "mongoose";
import { IUser } from "./User.type";

export interface IReport extends Document {
  court: string;
  suit_no: string;
  title: string;
  summary: string;
  body: string;
  date: Date;
  vol: string;
  year: string;
  likes?: number;
  caseRef?: string;
  slug: string;
  comments?: Array<ObjectId> | Array<IReportComment>;
  judgesList?: Array<ObjectId>;
  added_by?: IUser;
  updated_by?: ObjectId | IUser;
  createdAt: Date;
  updatedAt: Date;
  _doc: IReport;
}

// export interface IReport extends Model<ReportCommentInterface> { };

export interface IReportComment extends Document {
  content: string;
  author: ObjectId | IUser;
  likes?: number;
  approved?: boolean;
  createdAt: Date;
  report: ObjectId | IReport;
  _doc: IReportComment;
}
