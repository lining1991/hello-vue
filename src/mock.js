import Mock from 'mockjs';
// https://github.com/nuysoft/Mock/wiki/Getting-Started
const Random = Mock.Random;
Random.extend({
    category: function (category) {
        var category = ['food', 'live', 'drink', 'sleep', 'default'];
        return this.pick(category);
    }
});
// Mock.mock('@name');
const produceInitialItemList = function () {
    let listItem = [];
    let totalCount = Random.integer(3, 40);
    for (let i = 0; i < totalCount; i++) {
        let listItemObj = {
            title: Random.ctitle(5, 20),
            date: Random.date(),
            content: Random.cparagraph(),
            isdone: Random.boolean(),
            category: Random.category(),
            uid: Random.guid()
        }
        listItem.push(listItemObj);
    }
    return listItem;
}
const arr = produceInitialItemList();
Mock.mock('/mock/list', arr);
Mock.mock('/mock/add', ops => {
    let data = JSON.parse(ops.body);
    return {
        error_code: 0
    }
});
Mock.mock('/mock/get_detail', ops => {
    let data = JSON.parse(ops.body);
    let detail = arr.filter(item => item.uid === data.uid);
    return {
        error_code: 0,
        uid: data.uid,
        data: detail[0]
    }
});