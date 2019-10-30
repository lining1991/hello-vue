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
let appArr = produceInitialItemList();
Mock.mock('/mock/list', appArr);
Mock.mock('/mock/add', ops => {
    let data = JSON.parse(ops.body);
    // 这个还需要加到数组里边
    return {
        error_code: 0
    }
});
// 修改（更新）某个项
Mock.mock('/mock/update', ops => {

});
// 把该项的状态改为已完成
Mock.mock('/mock/done', ops => {
    let data = JSON.parse(ops.body);
    // appArr = appArr.filter(item => item.uid !== data.uid);
    console.log('done', ops);
    appArr.forEach((item, index) => {
        if (item.uid === data.uid) {
            item.isdone = true;
        }
    });
    return {
        error_code: 0,
        uid: data.uid
    }
});
// 获取详情
Mock.mock('/mock/get_detail', ops => {
    let data = JSON.parse(ops.body);
    let detail = appArr.filter(item => item.uid === data.uid);
    return {
        error_code: 0,
        uid: data.uid,
        data: detail[0]
    }
});
