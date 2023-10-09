# jd_hide_bottom_buttons.js 文件内容如下：
// 京东App底部按钮隐藏脚本
let body = $response.body;
let json = JSON.parse(body);

if (json && json.result && json.result.navigationAll && Array.isArray(json.result.navigationAll)) {
    // 找到“好看”和“摇钱树”的索引，将它们从数组中移除
    let navigationAll = json.result.navigationAll.filter(item => item.lableName !== "好看" && item.lableName !== "摇钱树" && item.lableName !== "逛" && item.lableName !== "新品");
    json.result.navigationAll = navigationAll;
    
    // 更新 paramValues 参数
    json.result.paramValues = navigationAll.map(item => item.functionId).join('_');
    
    // 将修改后的 JSON 转换回字符串
    $done({ body: JSON.stringify(json) });
} else {
    $done({ body });
}
