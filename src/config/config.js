const giftConfig = {
    '芝士蛋卷': 4,
    '手打曲奇饼干': 4,
    '山楂片': 4,
    '亲亲虾条': 4,
    '达利园熊仔饼': 4,
    '番茄味薯棒': 4,
    '麦丽素巧克力豆': 4,
    '蔓芮葱香卷': 4,
    '小小酥': 4,
    '山药片': 4,
    '艺术饼干': 4,
    '盼盼鸡味块': 4,
    '蟹黄瓜子仁': 4,
    '上好佳日式鱼果': 4,
    '酸妞软糖': 4,
    '香辣青豆': 4,
    '奶油玉米片': 4,
    '椒盐味炒米': 4,
    '启芬甜甜圈': 4,
    '山楂片': 4,
    '台湾米饼': 4,
    '香酥小麻花': 4,
    '卫龙小面筋': 4,
    '果味果冻': 4,
    '香辣烧烤味鱿鱼': 4,
    '香辣烤脖': 4,
    '湘味鱼仔': 4,
    '夹心米果': 4,
    '黑加仑葡萄干': 4,
    '焦糖爆米花': 4,
    '夹心小饼干': 4,
    '掌心脆干脆面': 4,
    '洋葱圈': 4,
    '蟹黄蚕豆': 4,
    '狗牙锅巴': 4,
    '咪咪虾条': 4,
    '大刀肉': 4,
    '王中王香辣肠': 4,
    '素牛肉卷': 4,
    '奥趣巧克力饼干': 4,
    '烤土豆片': 4,
    '克力威化饼': 4,
    '樱花奶油泡芙': 4,
    '乐事薯片': 4,
    '香草味双色棉花糖': 4,
    '西梅干': 4
}

export const getConfig = () => {
    const localConfig = localStorage.getItem('wjlChoujiang')
    if(!localConfig) {
        return giftConfig
    }else {
        return JSON.parse(localConfig)
    }
}