/*
* ******************************************************************************************************************************* **
* FileName: DataCheck.js
* ProjectName: data-check
* 作者: 区区电脑 GYFlash
* CreateTime: 2019-07-30 16:15
* ******************************************************************************************************************************* **
* ******************************************************************************************************************************* **
*/

/*
* 空
* 手机号
* 邮箱
* 身份证号码
* Url
* 正整数
* 保留两位小数
*
* */

(function (w) {
    var DataCheck = {};

    /**
     * 校验 是否为空值 （ null, undefined, '' ）
     * @param value
     * @returns {boolean}
     */
    DataCheck.isNull = function (value) {
        return value === null || value === undefined || value === ''
    };

    /**
     * 校验 是否为手机号
     * @param value
     * @returns {boolean}
     */
    DataCheck.isPhone = function (value) {
        return /^1[0-9]{10}$/.test(value)
    };

    /**
     * 校验 是否为邮箱
     * @param value
     * @returns {boolean}
     */
    DataCheck.isEmail = function (value) {
        if (typeof value != "string") { return false }
        return /^([a-zA-Z0-9]+[_|_|.]?)*[a-zA-Z0-9]+@([a-zA-Z0-9]+[_|_|.]?)*[a-zA-Z0-9]+\.(?:com|cn)$/.test(value)
    };

    /**
     * 校验 是否为合法身份证号
     * @param value
     * @returns {boolean}
     */
    DataCheck.isIDCardNo = function (value) {
        if (typeof value != "string") { return false }
        var arrExp = [7, 9, 10, 5, 8, 4, 2, 1, 6, 3, 7, 9, 10, 5, 8, 4, 2];
        var arrValid = [1, 0, "X", 9, 8, 7, 6, 5, 4, 3, 2];
        if(/^\d{17}\d|x$/i.test(value)){
            var sum = 0, idx;
            for(var i = 0; i < value.length - 1; i++){
                sum += parseInt(value.substr(i, 1), 10) * arrExp[i];
            }
            idx = sum % 11;
            return arrValid[idx] + '' === value.substr(17, 1).toUpperCase();
        }else{
            return false;
        }
    };

    /**
     * 校验 是否为 url ( http://, https:// )
     * @param value
     * @returns {boolean}
     */
    DataCheck.isUrl = function (value) {
        if (typeof value != "string") { return false }
        return value.substr(0,7).toLowerCase() === "http://" || value.substr(0,8).toLowerCase() === "https://"
    };

    /**
     * 校验 是否为正整数 ( 不包括 0 )
     * @param value
     * @returns {boolean}
     */
    DataCheck.isPositiveInteger = function (value) {
        if (typeof value != "number") { return false }
        return /^[0-9]*[1-9][0-9]*$/.test(value)
    };

    /**
     * 校验 是否精确到两位小数
     * @param value
     * @returns {boolean}
     */
    DataCheck.isFloadTwo = function (value) {
        if (typeof value != "number") { return false }
        if (this.isPositiveInteger(value)) {return true}
        var arr = value.toString().split('.');
        if (arr.length === 2 && arr[arr.length - 1].length === 2) {
            return true
        } else {
            return false
        }
    };

    w.$DataCheck = DataCheck
})(window);
