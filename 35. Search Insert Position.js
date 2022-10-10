var searchInsert = function(nums, target) {
    function Search(start, end) {
        if (start > end) return start;
        const mid = Math.floor((start + end) / 2);
        
        if (nums[mid] === target) 
            return mid;
        if (nums[mid] < target) 
            return Search(mid + 1, end);
        if (nums[mid] > target) 
            return Search(start, mid - 1);
    }
    
    return Search(0, nums.length - 1);
    
};
