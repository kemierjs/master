const cutHeader = function (arr) {
    return arr.map((item) => {
        item.fpic_list.forEach((value, index) => {
            const items =  item.fpic_list;
            items[index] = value.replace('http:', '');
        });
        return item;
    });
};
let arr=[
    {
        "ds": "20220526",
        "ftrans_id": "4200001515202205137732715721",
        "ftrade_create_time": "2022-05-13 15:43:11",
        "fuin": "2468189452",
        "fproduct_name": "佛山胜于蓝人力资源服务公司扫码收款",
        "famount": 480,
        "fcomplaint_type": "涉嫌诈骗\n       (利诱)",
        "fconplaint_scene": "线下门店",
        "fscene": "\\",
        "fnewscene": "刷卡",
        "fconplaint_detail": "该中介公司以建立档案为由骗取480元建立档案费",
        "fpic_list": [
            "http://p.qpic.cn/wxpaykf_wq/1970095943/6sHmkBe25z3tOsBbwoagbw5hWPkfWXbYHV6fX71UlF6GPbJihfCH4Pf1NC1AkrYu7st8S0WqCLjJo9sY/0",
            "http://p.qpic.cn/wxpaykf_wq/821416308/lyOnta0P7fop9fA3Iqpd1b7HJtCBFVcg28simzUYkR9OeSnV5Jxb66FZI54UPgSp8GZYjbRwDlwUfqY/0"
        ],
        "frefund_money_zb": "未退款"
    },
    {
        "ds": "20220524",
        "ftrans_id": "4200001454202205237345459361",
        "ftrade_create_time": "2022-05-23 14:16:10",
        "fuin": "1788070573",
        "fproduct_name": "佛山胜于蓝人力资源服务公司扫码收款",
        "famount": 480,
        "fcomplaint_type": "商家莫名自动扣费\n       (未知类型)",
        "fconplaint_scene": "未知",
        "fscene": "\\",
        "fnewscene": "刷卡",
        "fconplaint_detail": "说是给我购买什么档案编码什么的、到现在都没看到、虚拟的的公司、欺诈行为",
        "fpic_list": [
            "http://p.qpic.cn/wxpaykf_wq/1015809319/TOcxVcwTpzCXdOtsvaWZm5f1Z3cf1ZkIawk07lOHTHim2osSJM5PhFZtwPQh60yY4OTsXJy9v1UUtbID3A/0"
        ],
        "frefund_money_zb": "未退款"
    },
    {
        "ds": "20220523",
        "ftrans_id": "4200001445202205230262991019",
        "ftrade_create_time": "2022-05-23 14:44:22",
        "fuin": "2201222177",
        "fproduct_name": "佛山胜于蓝人力资源服务公司扫码收款",
        "famount": 480,
        "fcomplaint_type": "对商户服务不满意\n       (未知类型)",
        "fconplaint_scene": "未知",
        "fscene": "\\",
        "fnewscene": "刷卡",
        "fconplaint_detail": "招聘诈骗，以建档为由骗取钱财。",
        "fpic_list": [
            "http://p.qpic.cn/wxpaykf_wq/685588021/HCdQUXLmbGjq2twpLgRJ1HmDjiNJAb72VFcr39W5hE59yQb16nIJ9dkHfreR16rWNc9GulXe1n7kMrSRv9R/0"
        ],
        "frefund_money_zb": "未退款"
    },
    {
        "ds": "20220521",
        "ftrans_id": "4200001520202205215736588328",
        "ftrade_create_time": "2022-05-21 10:52:02",
        "fuin": "1785514096",
        "fproduct_name": "佛山胜于蓝人力资源服务公司扫码收款",
        "famount": 100,
        "fcomplaint_type": "涉嫌诈骗\n       (利诱)",
        "fconplaint_scene": "应用(app)",
        "fscene": "\\",
        "fnewscene": "刷卡",
        "fconplaint_detail": "收取建档费用\n《中华人民共和国劳动合同法》\n第九条 不得扣押劳动者的居民身份证和其他证件，不得要求劳动者提供担保或者以其他名义向劳动者收取财物。",
        "fpic_list": [
            ""
        ],
        "frefund_money_zb": "未退款"
    },
    {
        "ds": "20220520",
        "ftrans_id": "4200001528202205208427145173",
        "ftrade_create_time": "2022-05-20 09:51:26",
        "fuin": "1298895110",
        "fproduct_name": "佛山胜于蓝人力资源服务公司扫码收款",
        "famount": 480,
        "fcomplaint_type": "涉嫌诈骗\n       (利诱)",
        "fconplaint_scene": "应用(app)",
        "fscene": "\\",
        "fnewscene": "刷卡",
        "fconplaint_detail": "欺诈，欺骗人家上当扫码",
        "fpic_list": [
            "http://p.qpic.cn/wxpaykf_wq/396668166/ZFN5GUUmYRH3P7JbuN2Emuh6nkbEXfdBR6ZALkPVGUfqDZ52F8Ef8IV6CcXuP2PGprvoOBijdMP78xAf6E/0"
        ],
        "frefund_money_zb": "未退款"
    },
    {
        "ds": "20220520",
        "ftrans_id": "4200001421202205190292651614",
        "ftrade_create_time": "2022-05-19 15:04:59",
        "fuin": "1255636131",
        "fproduct_name": "佛山胜于蓝人力资源服务公司扫码收款",
        "famount": 480,
        "fcomplaint_type": "涉嫌诈骗\n       (其它)",
        "fconplaint_scene": "线下门店",
        "fscene": "\\",
        "fnewscene": "刷卡",
        "fconplaint_detail": "58同城投了简历让我去面试，问完问题后让我叫我交人事档案费，说不交钱安排不了入职，交了说晚上八点可以软件上联系商家安排，我以为已经安排好了没想到还是要去面试，打电话过去一个没接一个说要会白话一个等通知",
        "fpic_list": [
            "http://p.qpic.cn/wxpaykf_wq/1141706161/uo1LU1ZcNhPI1Wj7TbObsChgL6J2A9ocad9fP81fS6tLRsqtX8G1rrdJHCdm2tMLl7xSCBRKqsfE7X5Cvkya/0",
            "http://p.qpic.cn/wxpaykf_wq/1260667013/9WxbnK0cAkHVi6EDAIomYyozHe9aIFJRoNcTU0BSqBcX5KtKz8Po9PxITPHdqduaW2RfnyAIEED5KI/0",
            "http://p.qpic.cn/wxpaykf_wq/958476857/THN7R63h4PfTxTwepyUIMi3Lh3BUsCoyAeovMgvzPdmMauFoUP0gExXEBnIjTyLDD3lXNbKsBZQ2s4Ftw/0"
        ],
        "frefund_money_zb": "未退款"
    },
    {
        "ds": "20220517",
        "ftrans_id": "4200001445202205168031595376",
        "ftrade_create_time": "2022-05-16 17:16:23",
        "fuin": "212981518",
        "fproduct_name": "佛山胜于蓝人力资源服务公司扫码收款",
        "famount": 480,
        "fcomplaint_type": "涉嫌诈骗\n       (通过商户交易欺诈)",
        "fconplaint_scene": "线下门店",
        "fscene": "\\",
        "fnewscene": "刷卡",
        "fconplaint_detail": "就是骗我钱，其他们的软件也是作假，信息对不上，都不要人的他还是放上去",
        "fpic_list": [
            ""
        ],
        "frefund_money_zb": "未退款"
    },
    {
        "ds": "20220516",
        "ftrans_id": "4200001524202205112529723973",
        "ftrade_create_time": "2022-05-11 15:40:23",
        "fuin": "1714586073",
        "fproduct_name": "佛山胜于蓝人力资源服务公司扫码收款",
        "famount": 480,
        "fcomplaint_type": "对商户服务不满意\n       (未知类型)",
        "fconplaint_scene": "未知",
        "fscene": "\\",
        "fnewscene": "刷卡",
        "fconplaint_detail": "花了钱没有用，登又登不上工作又找不到。一下告诉我账号不存在一下告诉我密码不对，客服不解决就会敷衍这跟骗钱有什么区别",
        "fpic_list": [
            "http://p.qpic.cn/wxpaykf_wq/2121183884/QC1WeH3ey5OHKOXbIWbA4A6aAIYs7YNgixFuBSdDVHLVDuXv7AbwPlXi2anJQKZflqIVnABHh2wHiUATgA/0"
        ],
        "frefund_money_zb": "未退款"
    },
    {
        "ds": "20220512",
        "ftrans_id": "4200001526202205125290205898",
        "ftrade_create_time": "2022-05-12 14:31:39",
        "fuin": "3632674115",
        "fproduct_name": "佛山胜于蓝人力资源服务公司扫码收款",
        "famount": 480,
        "fcomplaint_type": "对商户服务不满意\n       (未知类型)",
        "fconplaint_scene": "未知",
        "fscene": "\\",
        "fnewscene": "刷卡",
        "fconplaint_detail": "现在不接电话也不回信息",
        "fpic_list": [
            "http://p.qpic.cn/wxpaykf_wq/1114395757/QMhjqABpjT18wOpYKeCIwKN8CKX4m7e94dOL6nfbgAXdJUztROAsMVEwNUYPK0YjmrcFoBvj06ht8WhqjCQw/0"
        ],
        "frefund_money_zb": "未退款"
    },
    {
        "ds": "20220501",
        "ftrans_id": "4200001425202204307801832060",
        "ftrade_create_time": "2022-04-30 13:41:08",
        "fuin": "1638785397",
        "fproduct_name": "佛山胜于蓝人力资源服务公司扫码收款",
        "famount": 480,
        "fcomplaint_type": "对商户服务不满意\n       (未知类型)",
        "fconplaint_scene": "未知",
        "fscene": "\\",
        "fnewscene": "刷卡",
        "fconplaint_detail": "这平台根本就没人，打了电话有不回",
        "fpic_list": [
            ""
        ],
        "frefund_money_zb": "未退款"
    }
]
let result = cutHeader(arr);
console.log(result.length)
