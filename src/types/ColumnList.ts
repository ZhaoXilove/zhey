export default interface ColumnListProp {
  id: number
  title: string
  avatar?: string
  description?: string
}

export const testData: ColumnListProp[] = [
  {
    id: 1,
    avatar: require('@/assets/logo.png'),
    title: 'test1的专栏',
    description:
      '读报金句摘抄： 1.很少和你说谢谢，因为觉得太过官方，但就在此刻真的好想跟你说谢谢'
  },
  {
    id: 2,
    avatar: require('@/assets/logo.png'),
    title: 'test2的专栏',
    description:
      '读报金句摘抄： 1.很少和你说谢谢，因为觉得太过官方，但就在此刻真的好想跟你说谢谢'
  },
  {
    id: 3,
    avatar: require('@/assets/logo.png'),
    title: 'test3的专栏',
    description:
      '读报金句摘抄： 1.很少和你说谢谢，因为觉得太过官方，但就在此刻真的好想跟你说谢谢'
  },
  {
    id: 4,
    avatar: require('@/assets/logo.png'),
    title: 'test4的专栏',
    description:
      '读报金句摘抄： 1.很少和你说谢谢，因为觉得太过官方，但就在此刻真的好想跟你说谢谢'
  }
]

export interface PostProps {
  id: number
  title: string
  content?: string
  image?: string
  createdAt?: string
  columnId: number
}

export const testPosts: PostProps[] = [
  {
    id: 1,
    title: '佩洛西访台背后隐藏的底层逻辑',
    content: `最近最热的事情应该当属佩洛西敢不敢去试探中国的底线，但是看了一圈所谓砖家的评论觉得没几个说到位的，本来我在准备一篇刷新认知的文章，但不得不在这篇文章之前把有些读者不知道的事情聊透，来让读者在这次中美博弈中，保持更清醒的认知。关于美国首先要拿台湾来拱动东亚局势，我早在五月份的文章《深度|美国已经从乌克兰战场抽身，将枪瞄准中国》就已经预测了美国会把台湾当做启动东亚乱局的引信。对于美国来说，在文在寅党派失利，安倍被杀之后东亚的布局早已完成，就看美国准备什么时候引发。按照我之前的推算，美国正常来说，现在引发是不合时宜的。因为日本的右翼还没准备好。美国在直面中国的战争之前，最需要玩的就是合纵连横那一套，玩这一套的主要目的也就是“弱秦”。这个秦自然是指新崛起的大国中国。`,
    image:
      'https://pica.zhimg.com/v2-711e403ee56b381dbd45046ccca2fcc3_400x224.jpg?source=7e7ef6e2',
    createdAt: '发布于 2022-08-02 18:32',
    columnId: 1
  },
  {
    id: 2,
    title: '8月3日俄乌战报 写在七夕之前',
    content: `如果你在地图上看53个定居点没有多大。甚至好多地图都不能清晰的标注出来。可是对乌克兰军队而言，意义非凡。因为没解放一个定居点都要面对侵略军疯狂的反攻轰炸。要付出很大的努力去守住这个定居点。仅仅这53个定居点就不知道消耗了侵略军多少兵力。接下来赫尔松西部这53个定居点将成为俄军进攻的主要方向。这里可能会爆发血战！`,
    image: 'https://pic3.zhimg.com/v2-22a4a45fe9584df42e7e8be2519d076a_b.jpg',
    createdAt: '编辑于 2022-08-04 10:56',
    columnId: 2
  }
]
