const Exercise_6 = {
    
    // Kadane’s algorithm
    // Exercise 6.1
    fnContiguousSubarraySum: (a) =>
    {
        let sum = 0
        let num = 0
        for (let i = 0; i < a.length; i++)
        {
            num = num + a[i]
            if (sum < num)
                sum = num
            if (num < 0)
                num = 0 
        }
        return sum
    },
    
    // Exercise 6.2
    spiralPrint: (arr) =>{
        let i, rowStart = 0, colStart = 0,output=[],m=arr[0].length, n=arr.length
        while (rowStart < m && colStart < n) {
            for (i = colStart; i < n; ++i) {
                output.push((arr[rowStart][i]));
            }
            rowStart++;
            for (i = rowStart; i < m; ++i) {
                output.push((arr[i][n - 1]));
            }
            n--;
            if (rowStart < m) {
                for (i = n - 1; i >= colStart; --i) {
                    output.push((arr[m - 1][i]));
                }
                m--;
            }
            if (colStart < n) {
                for (i = m - 1; i >= rowStart; --i) {
                    output.push((arr[i][colStart]));
                }
                colStart++;
            }
        }
        return output.toString();
    }

}

module.exports = Exercise_6