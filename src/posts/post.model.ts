// import { prop, getModelForClass } from '@typegoose/typegoose';
import { prop } from '@typegoose/typegoose';
import { ApiTags, ApiOperation, ApiProperty } from '@nestjs/swagger';

export class Post {
  // DTO的形式ApiProperty
  @ApiProperty({ description: '帖子标题', example: '帖子标题1' })
  @prop()
  title: string
  
  @ApiProperty({ description: '帖子内容', example: '帖子内容1' })
  @prop()
  content: string
}

// 这里不需要定义模型
// export const PostModel = getModelForClass(Post)