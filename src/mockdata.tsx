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
        id: '165165',
        department: 'Математического моделирования',
        paperName: 'Математическое моделирование в биологии'

    },
    {
        faculty: 'ИВТ',
        fio: 'Шустов Алексей Павлович',
        degree: 'бакалавриат',
        id: '156156',
        department: 'Сверхзвуковых вычислений',
        paperName: 'Уравнение для вычисления скорости звука в параллельной вселенной'

    },
    {
        faculty: 'Физический',
        fio: 'Шустиков Андрей Николаевич',
        degree: 'магистратура',
        id: '110110',
        department: 'Радиофизики',
        paperName: 'Уравнение звуковой волны'

    },
    {
        faculty: 'Математический',
        fio: 'Петров Иван Петрович',
        degree: 'магистратура',
        id: '165561',
        department: 'Дифференциальных уравнений',
        paperName: 'Нейронная сеть для распознавания рукописных цифр'

    },
    {
        faculty: 'ИВТ',
        fio: 'Иванов Иван Иванович',
        degree: 'бакалавриат',
        id: '155155',
        department: 'Сверхзвуковых вычислений',
        paperName: 'Проблема перемещения во времени'

    },
    {
        faculty: 'Филологический',
        fio: 'Иванова Екатерина Алексеевна',
        degree: 'бакалавриат',
        id: '120120',
        department: 'Иностранных языков',
        paperName: 'Исследование языка викингов'

    },
    {
        faculty: 'Математический',
        fio: 'Фёдоров Илья Михайлович',
        degree: 'бакалавриат',
        id: '165561',
        department: 'Дифференциальных уравнений',
        paperName: 'Блокчейн-технологии'

    },
    {
        faculty: 'Театра и кино',
        fio: 'Уиллис Брюс Крепкоорешкович',
        degree: 'Аспирант',
        id: '999999',
        department: 'спасения Земли',
        paperName: 'Уравнение взрыва ядерной бомбы на поверхости метеорита с учетом движения'

    },
    {
        faculty: 'Математический',
        fio: 'Сахаров Никита Алексеевич',
        degree: 'бакалавриат',
        id: '165100',
        department: 'Математического моделирования',
        paperName: 'Уравнение популяции зайчиков'

    },
    {
        faculty: 'Экономический',
        fio: 'Рублёв Александр Павлович',
        degree: 'бакалавриат',
        id: '150150',
        department: 'Межнациональной торговли',
        paperName: 'Криптовалюта и NFT'

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
    {
        faculty: 'Физический',
        departmentName: 'Радиофизика',
        headOfDepartment: 'Волов И.А.',
    },
    {
        faculty: 'ФСПН',
        departmentName: 'Организация работы с молодёжью',
        headOfDepartment: 'Денисова Д.А.',
    },
    {
        faculty: 'ФСПН',
        departmentName: 'Политология',
        headOfDepartment: 'Соколов С.С.',
    },
    {
        faculty: 'Филологический',
        departmentName: 'Иностранные языки',
        headOfDepartment: 'Кулаков А.С.',
    },
    {
        faculty: 'Экономический',
        departmentName: 'Нелинейная динамика',
        headOfDepartment: 'Иванов А.И',
    },
    {
        faculty: 'Юридический',
        departmentName: 'Уголовное право и криминология',
        headOfDepartment: 'Дудин В.П',
    },
    {
        faculty: 'Психологии и биологии',
        departmentName: 'Психологии',
        headOfDepartment: 'Пупов А.И',
    },
    {
        faculty: 'Психологии и биологии',
        departmentName: 'Биологии',
        headOfDepartment: 'Лупов А.И',
    },
]