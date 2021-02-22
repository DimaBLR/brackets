module.exports = function check(str, bracketsConfig) {
    str = str.split('');
    for (let b = 0; b < bracketsConfig.length; b++) {
        let x0 = bracketsConfig[b][0];
        let x1 = bracketsConfig[b][1];
            for (let i=0; i < str.length; i++) {
                if (str[i] == x0 && str[i+1] == x1) {
                    str.splice(i, 2);
                    i = -1; b = -1;
                }
            }
    }
    return !(str.length);
}
