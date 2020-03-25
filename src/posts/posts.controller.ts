import { Controller, Get, Post, Body, Query, Param, Put, Delete } from '@nestjs/common';
import { ApiTags, ApiOperation, ApiProperty } from '@nestjs/swagger';
import { PostModel } from './post.model';

// 为了标识创建帖子的数据
class CreatePostDto {
  @ApiProperty({ description: '帖子标题' })
  title: string
  @ApiProperty({ description: '帖子内容' })
  content: string
}

class UpdatePostDto {
  @ApiProperty({ description: '帖子标题' })
  title: string
  @ApiProperty({ description: '帖子内容' })
  content: string
}

@Controller('posts')
@ApiTags('帖子')
export class PostsController {
  @Get()  // 也可以写成@Get('/')
  @ApiOperation({summary: '显示帖子列表'})
  async index () {
    // return [
    //   {id: 1},
    //   {id: 2},
    //   {id: 3},
    //   {id: 4}
    // ]
    return await PostModel.find()
  }

  @Post()
  @ApiOperation({summary: '创建帖子'})
  // create (@Body() body, @Query() query, @Param() params) {
  create (@Body() body: CreatePostDto) {
      // body
    // query
    // params
    // return {
    //   success: true
    // }
    return body
  }

  // 详情页
  @Get(':id')
  @ApiOperation({summary: '帖子详情接口'})
  detail (@Param('id') id:string) {
    return {
      id,
      title: "aaaa"
    }
  }

  // 修改
  @Put(':id')
  @ApiOperation({summary: '编辑帖子'})
  update (@Param('id') id:string, @Body() body: UpdatePostDto) {
    return body
  }

  @Delete(':id')
  @ApiOperation({summary: '删除帖子'})
  remove (@Param('id') id:string) {
    return {
      success: true
    }
  }
}
