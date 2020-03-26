import { Controller, Get, Post, Body, Query, Param, Put, Delete } from '@nestjs/common';
import { ApiTags, ApiOperation, ApiProperty } from '@nestjs/swagger';
// import { PostModel } from './post.model';
import { IsNotEmpty } from 'class-validator'
import { InjectModel } from 'nestjs-typegoose';
import { Post as PostSchema } from './post.model';

// 定义DTO数据传输对象
// 为了标识创建帖子的数据，是一种规范
class CreatePostDto {
  @ApiProperty({ description: '帖子标题', example: '帖子标题1' })
  @IsNotEmpty({ message: '请填写标题' })
  title: string
  @ApiProperty({ description: '帖子内容', example: '帖子内容1' })
  content: string
}
// 为了标识更新帖子的数据，是一种规范
class UpdatePostDto {
  @ApiProperty({ description: '帖子标题' })
  title: string
  @ApiProperty({ description: '帖子内容' })
  content: string
}

// 控制器路由
@Controller('posts')
@ApiTags('帖子')
export class PostsController {
  constructor(
    @InjectModel(PostSchema) private readonly PostModel
  ){}
  @Get()  // 也可以写成@Get('/')
  @ApiOperation({ summary: '显示帖子列表' })
  async index() {
    return await this.PostModel.find()
    // return [
    //   {id: 1},
    //   {id: 2},
    //   {id: 3},
    //   {id: 4}
    // ]
  }

  @Post()
  @ApiOperation({ summary: '创建帖子' })
  // create (@Body() body, @Query() query, @Param() params) {
  async create(@Body() createPostDto: CreatePostDto) {
    // body
    // query
    // params
    await this.PostModel.create(createPostDto)
    return {
      success: true
    }
    // return createPostDto
  }

  // 详情页
  @Get(':id')
  @ApiOperation({ summary: '帖子详情接口' })
  async detail(@Param('id') id: string) {
    return await this.PostModel.findById(id)
    // return {
    //   id,
    //   title: "aaaa"
    // }
  }

  // 修改
  @Put(':id')
  @ApiOperation({ summary: '编辑帖子' })
  async update(@Param('id') id: string, @Body() updatePostDto: UpdatePostDto) {
    await this.PostModel.findByIdAndUpdate(id, updatePostDto)
    return {
      success: true
    }
  }

  @Delete(':id')
  @ApiOperation({ summary: '删除帖子' })
  async remove(@Param('id') id: string) {
    await this.PostModel.findByIdAndDelete(id)
    return {
      success: true
    }
  }
}
