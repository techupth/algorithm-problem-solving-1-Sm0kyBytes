function twoSum(numbers, target) {
  // เริ่มเขียนโค้ดตรงนี้จ้า
  // f(x) หาตำแหน่งของสมาชิกสองตัวใน Array ที่บวกกันแล้วได้ผลลัพธ์เท่ากับ target
  //ใช้ loop เข้าถึงสมาชิกแต่ละตัว
  for (let i = 0; i < numbers.length; i++) {
    //ใช้ loop เพื่อนำสมาชิกใน loop นอกไปบวกกับสมาชิกตัวอื่นทุกตัว
    // let result;
    for (let j = i + 1; j < numbers.length; j++) {
      //ใช้ if-else ตั้งเงื่อนไขให้หยุดเมื่อผลบวกของสมาชิกเท่ากับ target
      if (numbers[i] + numbers[j] == target) {
        // return ค่าออกมาในรูปแบบ array
        return [i, j];
      }
    }
  }
  return [];
}
console.log(twoSum([2, 7, 11, 15], 9));
console.log(twoSum([2, 7, 11, 15], 23));
