

const Exercise_6_1 = {
    
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
    }



}

module.exports = Exercise_6_1