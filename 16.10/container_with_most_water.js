var maxArea = function(height) {
    let max = 0;
    let i = 0;
    let j = height.length - 1;
    while (i !== j) {
        let width = j - i;
        let area = width * Math.min(height[i], height[j]); 
        if (area > max) max = area;
        if (height[i] > height[j]) {
            --j;
        }
        else  {
            ++i;
        }
    }
    return max;
};