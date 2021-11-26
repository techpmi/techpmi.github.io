import { Column } from './Components/RegistryTable';

export const studentTableColumns: Column[] = [
    {
        caption: 'Факультет',
        field: 'faculty',
    },
    {
        caption: 'Имя студента',
        field: 'fio',
    },
    {
        caption: 'Ступень образования',
        field: 'degree',
    },  
];

export const departmentTableColumns: Column[] = [
    {
        caption: 'Факультет',
        field: 'faculty',
    },
    {
        caption: 'Наименование кафедры',
        field: 'departmentName',
    },
    {
        caption: 'Заведующий кафедрой',
        field: 'headOfDepartment',
    },
];

export const students: Record<string, string>[] = [
    {
        faculty: 'Математический',
        fio: 'Шутов Александр Николаевич',
        degree: 'бакалавриат',
    },
    {
        faculty: 'ИВТ',
        fio: 'Шустов Алексей Николаевич',
        degree: 'магистратура',
    },
];

export const departments: Record<string, string>[] = [
    {
        faculty: 'Математический',
        departmentName: 'Нелинейная динамика',
        headOfDepartment: 'Иванов А.И',
    },
    {
        faculty: 'ИВТ',
        departmentName: 'Компьютерная безопасность',
        headOfDepartment: 'Петров И.А',
    },
]