const giftConfig = {
    '百事可乐': 16,
    '美年达橙味': 4,
    '七喜柠檬味': 4,
    '古茗奶茶（20元以下）': 5,
    '奥利奥mini草莓味': 2,
    '奥利奥mini原味': 2,
    '奥利奥mini巧克力': 2,
    '旺旺大礼包': 1,
    '奇多': 2,
    '乐事桶装烧烤味': 1,
    '乐事桶装原味': 1,
    '乐事桶装蕃茄味': 1,
    '乐事大波浪鸡翅味': 1,
    '乐事大波浪五花肉': 1,
    '乐事袋装番茄味': 1,
    '乐事袋装烧烤味': 1
}

export const getConfig = () => {
    const localConfig = localStorage.getItem('wjlChoujiang')
    if(!localConfig) {
        return giftConfig
    }else {
        return JSON.parse(localConfig)
    }
}
