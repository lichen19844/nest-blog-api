// import { prop, getModelForClass } from '@typegoose/typegoose';
import { prop } from '@typegoose/typegoose';

export class Post {
  @prop()
  title: string
  @prop()
  content: string
}

// 这里不需要定义模型
// export const PostModel = getModelForClass(Post)