

//two sum
// // let i = 0
// var twoSum = function (nums, target) {
//     // if (nums[i] + nums[i + 1] === target) return [i, i + 1];

//     // i++
//     // twoSum(nums, target)

//     for (let i = 0; i < nums.length - 1; i++) {
//         if (nums[i] + nums[i + 1] === target) return [i, i + 1]
//     }
// };

// console.log(twoSum([3, 7, 2, 8], 9));


//palindrome
/*
 * @param {number} x
 * @return {boolean}
 */

// var isPalindrome = function (x) {
//     if (x < 0) return false
//     for (let i = 0; i < x.length; i++) {
//         const element = array[i];

//     }
// };



// Roman to Integer
// const roman = {
//     I: 1,
//     V: 5,
//     X: 10,
//     L: 50,
//     C: 100,
//     D: 500,
//     M: 1000,
// };

// function romanToInt(s) {
//     const integers = s.split('').map(c => roman[c]);

//     return integers.reduce((acc, x, i) => x < integers[i + 1] ? acc - x : acc + x, 0);
// };

// romanToInt("III")


// 14. Longest Common Prefix

// let strs = ["flower", "flow", "flight"]

// function longestCommonPrefix(strs) {
//     if (!strs[0].length) return ""
//     let prefix = "";
//     for (let i = 0; i < strs[0].length; i++) {
//         if (strs.every(str => str[i] === strs[0][i])) {
//             prefix += strs[0][i]
//         } else break
//     }
//     return prefix
// };

// console.log(longestCommonPrefix(strs));

// 20. Valid Parentheses

// let s = "([])"

// var isValid = function (s) {
//     const stack = [];

//     for (let i = 0; i < s.length; i++) {
//         let c = s.charAt(i);
//         switch (c) {
//             case '(': stack.push(')');
//                 break;
//             case '[': stack.push(']');
//                 break;
//             case '{': stack.push('}');
//                 break;
//             default:
//                 if (c !== stack.pop()) {
//                     return false;
//                 }
//         }
//     }
// }

// 21. Merge Two Sorted Lists

// You are given the heads of two sorted linked lists list1 and list2.
// Merge the two lists into one sorted list. The list should be made by splicing together the nodes of the first two lists.
// Return the head of the merged linked list.

// let list1 = [1, 2, 4]
// let list2 = [1, 3, 4]

// /**
//  * Definition for singly-linked list.
//  * function ListNode(val, next) {
//  *     this.val = (val===undefined ? 0 : val)
//  *     this.next = (next===undefined ? null : next)
//  * }
//  */
// /**
// //  * @param {ListNode} list1
// //  * @param {ListNode} list2
// //  * @return {ListNode}
//  */
// var mergeTwoLists = function (list1, list2) {
//     let dummy = new ListNode();
//     let cur = dummy;

//     while (list1 && list2) {
//         if (list1.val > list2.val) {
//             cur.next = list2;
//             list2 = list2.next;
//         } else {
//             cur.next = list1;
//             list1 = list1.next;
//         }
//         cur = cur.next;
//     }

//     cur.next = list1 || list2;

//     return dummy.next;
// };
// console.log(mergeTwoLists(list1, list2));


// 26. Remove Duplicates from Sorted Array

// Given an integer array nums sorted in non-decreasing order, remove the duplicates in-place such that each unique element appears only once. The relative order of the elements should be kept the same. Then return the number of unique elements in nums.
//
// Consider the number of unique elements of nums to be k, to get accepted, you need to do the following things:
//
// Change the array nums such that the first k elements of nums contain the unique elements in the order they were present in nums initially. The remaining elements of nums are not important as well as the size of nums.
// Return k.

/*
 * @param {number[]} nums
 * @return {number}
 */
// var removeDuplicates = function(nums) {
//     let k = 1
//     for( let i=0; i<nums.length-1; i++) {
//         if(nums[i]!==nums[i+1]){
//             nums[k] = nums[i+1]
//             k++
//         }
//     }
//     return k
// };

// 27. Remove Element

/*
Given an integer array nums and an integer val, remove all occurrences of val in nums in-place. The order of the elements may be changed. Then return the number of elements in nums which are not equal to val.

Consider the number of elements in nums which are not equal to val be k, to get accepted, you need to do the following things:

Change the array nums such that the first k elements of nums contain the elements which are not equal to val. The remaining elements of nums are not important as well as the size of nums.
Return k.
*/

/*
 * @param {number[]} nums
 * @param {number} val
 * @return {number}
 */

var removeElement = function (nums, val) {
    let k = 0
    for (let i = 0; i < nums.length; i++) {
        if (nums[i] !== val) {
            nums[k] = nums[i];
            k++;
        }
    }
    return k;
};

