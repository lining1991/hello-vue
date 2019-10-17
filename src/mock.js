import Mock from 'mockjs';
// https://github.com/nuysoft/Mock/wiki/Getting-Started
const Random = Mock.Random;
Random.extend({
    category: function (category) {
        var category = ['food', 'live', 'drink', 'sleep'];
        return this.pick(category);
    }
});
// Mock.mock('@name');
const produceItemList = function () {
    let listItem = [];
    let totalCount = Random.integer(3, 40);
    for (let i = 0; i < totalCount; i++) {
        let listItemObj = {
            title: Random.ctitle(5, 20),
            date: Random.date(),
            content: Random.cparagraph(),
            isdone: Random.boolean(),
            category: Random.category()
        }
        listItem.push(listItemObj);
    }
    return listItem;
}
Mock.mock('/mock/list', produceItemList);
