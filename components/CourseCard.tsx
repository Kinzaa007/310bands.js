import type { Course } from "../types/course";

type CourseCardProps = {
  course: Course;
  description?: string;
};

export default function CourseCard({ course, description }: CourseCardProps) {
  return (
    <article className="course-card">
      <h2>{course.title}</h2>
      {course.code && <p>รหัสวิชา: {course.code}</p>}
      {course.credits && <p>{course.credits} หน่วยกิต</p>}
      {course.isOpen !== undefined && (
        <p>{course.isOpen ? "เปิดลงทะเบียน" : "ปิดลงทะเบียน"}</p>
      )}
      {description && <p>{description}</p>}
    </article>
  );
}