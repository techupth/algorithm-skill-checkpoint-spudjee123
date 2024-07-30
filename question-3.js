/*
What is the Big O notation for Function findStudentById . Explain your reason.
Answer:
Big O Notation: O(n)
ฟังก์ชันนี้ใช้ (linear search) ต้องตรวจสอบทุกองค์ประกอบในอาร์เรย์ทีละตัว ดังนั้น เวลาในการทำงานจะเพิ่มขึ้นตามจำนวนองค์ประกอบในอาร์เรย์


*/

/* 
What is the Big O notation for Function findProductPrice. Explain your reason.
Answer:
Big O Notation: O(logn)
ฟังก์ชันนี้ใช้ (binary search) โดยแบ่งครึ่งอาร์เรย์ทุกครั้งที่ทำการค้นหา ทำให้เวลาในการทำงานลดลงอย่างมาก


*/

/* 
Which function is more efficient and why?
Answer:
ฟังก์ชัน findProductPrice มีประสิทธิภาพมากกว่า เพราะ O(logn) ไม่ทำงานหนักเท่ากับ O(n)
 เมื่อขนาดของอาร์เรย์เพิ่มขึ้น ทำให้ค้นหาได้เร็วกว่าในกรณีที่มีข้อมูลจำนวนมาก


*/
