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
    },

    // Exercise 6.3
    arrange: (arr) =>{
        
        let maxlength = arr.length - 1; 
        let current = 0;
        let follow = 0;
        let temp;
        while(current<=maxlength)    {
            if(arr[current] == 0)
            {
                temp = arr[follow]
                arr[follow] = arr[current]
                arr[current] = temp
                follow++;
                current++;
            }
            else if(arr[current] == 1)
            {
                current++
            }
            else
            {
                temp = arr[current]
                arr[current] = arr[maxlength]
                arr[maxlength] = temp
                maxlength--;
            }
        }
        return arr.toString();
    },

    calculateProfit:(prices)=>{
        const min = Math.min(...prices)
        const sub = prices.slice(prices.indexOf(min), prices.length);
        if (sub.length>0)
        {
            const max = Math.max(...sub)
            if (max<=min)
            {
                return 0
            }
            else
            {
                return max-min
            }
        }
        else
        {
            return 0
        }

    },

    findPair:(arr, answer)=>{
        for(el of arr)
        {
            for(el1 of arr)
            {
                console.log(el,el1,el-el1,answer)
                const computed = el-el1
                if(computed === answer)
                {
                    return 1
                }
            }
        }
        return 0
    }

}

module.exports = Exercise_6