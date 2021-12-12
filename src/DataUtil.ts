export type TData = Record<string, string>

const STUDENTS: TData[] = [
    {
        faculty: 'Математический',
        fio: 'Шутов Александр Николаевич',
        degree: 'бакалавриат',
        birth: '01.01.2001',
        id: '165165',
        department: 'Математического моделирования',
        paperName: 'Математическое моделирование в биологии'
    },
    {
        faculty: 'ИВТ',
        fio: 'Шустов Алексей Павлович',
        degree: 'бакалавриат',
        birth: '02.02.2001',
        id: '156156',
        department: 'Сверхзвуковых вычислений',
        paperName: 'Уравнение для вычисления скорости звука в параллельной вселенной'
    },
    {
        faculty: 'Физический',
        fio: 'Шустиков Андрей Николаевич',
        degree: 'магистратура',
        birth: '03.03.2001',
        id: '110110',
        department: 'Радиофизики',
        paperName: 'Уравнение звуковой волны'
    },
    {
        faculty: 'Математический',
        fio: 'Петров Иван Петрович',
        degree: 'магистратура',
        birth: '04.04.2001',
        id: '165561',
        department: 'Дифференциальных уравнений',
        paperName: 'Нейронная сеть для распознавания рукописных цифр'
    },
    {
        faculty: 'ИВТ',
        fio: 'Иванов Иван Иванович',
        degree: 'бакалавриат',
        birth: '05.05.2001',
        id: '155155',
        department: 'Сверхзвуковых вычислений',
        paperName: 'Проблема перемещения во времени'
    },
    {
        faculty: 'Филологический',
        fio: 'Иванова Екатерина Алексеевна',
        degree: 'бакалавриат',
        birth: '06.06.2001',
        id: '120120',
        department: 'Иностранных языков',
        paperName: 'Исследование языка викингов'
    },
    {
        faculty: 'Математический',
        fio: 'Фёдоров Илья Михайлович',
        degree: 'бакалавриат',
        birth: '07.07.2001',
        id: '165561',
        department: 'Нелинейной динамики',
        paperName: 'Блокчейн-технологии'
    },
    {
        faculty: 'Театра и кино',
        fio: 'Уиллис Брюс Крепкоорешкович',
        degree: 'Аспирант',
        birth: '08.08.2001',
        id: '999999',
        department: 'Боевиков',
        paperName: 'Уравнение взрыва ядерной бомбы на поверхости метеорита с учетом движения'
    },
    {
        faculty: 'Математический',
        fio: 'Сахаров Никита Алексеевич',
        degree: 'бакалавриат',
        birth: '09.09.2001',
        id: '165100',
        department: 'Математического моделирования',
        paperName: 'Уравнение популяции зайчиков'
    },
    {
        faculty: 'Экономический',
        fio: 'Рублёв Александр Павлович',
        degree: 'бакалавриат',
        birth: '10.10.2001',
        id: '150150',
        department: 'Межнациональной торговли',
        paperName: 'Криптовалюта и NFT'
    },
];

const DEPARTMENTS: TData[] = [
    {
        id: 'mat-nld',
        faculty: 'Математический',
        departmentName: 'Нелинейной динамики',
        headOfDepartment: 'Иванов А.И'
    },
    {
        id: 'mat-mmd',
        faculty: 'Математический',
        departmentName: 'Математического моделирования',
        headOfDepartment: 'Иванов А.И'
    },
    {
        id: 'ivt-kbo',
        faculty: 'ИВТ',
        departmentName: 'Компьютерной безопасности',
        headOfDepartment: 'Петров И.А'
    },
    {
        id: 'ivt-kbo',
        faculty: 'ИВТ',
        departmentName: 'Сверхзвуковых вычислений',
        headOfDepartment: 'Коркин П.Н'
    },
    {
        id: 'phy-rph',
        faculty: 'Физический',
        departmentName: 'Радиофизики',
        headOfDepartment: 'Волов И.А.'
    },
    {
        id: 'fsp-orm',
        faculty: 'ФСПН',
        departmentName: 'Организации работы с молодёжью',
        headOfDepartment: 'Денисова Д.А.'
    },
    {
        id: 'fsp-pol',
        faculty: 'ФСПН',
        departmentName: 'Политологии',
        headOfDepartment: 'Соколов С.С.'
    },
    {
        id: 'tik-pol',
        faculty: 'Театра и кино',
        departmentName: 'Боевиков',
        headOfDepartment: 'Кэмерон Д.Д.'
    },
    {
        id: 'fil-ino',
        faculty: 'Филологический',
        departmentName: 'Иностранных языков',
        headOfDepartment: 'Кулаков А.С.'
    },
    {
        id: 'eco-ryn',
        faculty: 'Экономический',
        departmentName: 'Рыночных отношений',
        headOfDepartment: 'Иванов А.И'
    },
    {
        id: 'eco-mnt',
        faculty: 'Экономический',
        departmentName: 'Межнациональной торговли',
        headOfDepartment: 'Монахов М.Н'
    },
    {
        id: 'yur-ugo',
        faculty: 'Юридический',
        departmentName: 'Уголовного права и криминологии',
        headOfDepartment: 'Дудин В.П'
    },
    {
        id: 'psy-psy',
        faculty: 'Психологии и биологии',
        departmentName: 'Психологии',
        headOfDepartment: 'Пупов А.И'
    },
    {
        id: 'psy-bio',
        faculty: 'Психологии и биологии',
        departmentName: 'Биологии',
        headOfDepartment: 'Лупов А.И',
    },
]

export const getStudentById = (id: string) => {
    return Promise.resolve(STUDENTS.find((student) => student.id === id));
}

export const getStudentsList = () => {
    return Promise.resolve(STUDENTS);
}

export const getDepartmentById = (id: string) => {
    return Promise.resolve(DEPARTMENTS.find((department) => department.id === id));
}

export const getDepartmentsList = () => {
    return Promise.resolve(DEPARTMENTS);
}