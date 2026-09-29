type Resource = {
    id: number;
    title: string;
    minutes: number;
};

const resources: Resource[] = [
    title: "Основи Git та GitHub",
    { id: 2, title: "Змінні в JS", minutes: 20 },
    { id: 3, title: "Типи TypeScript", minutes: 30 }
];

function selectResources(items: Resource[], limit: number): Resource[] {
    return items.filter(item => item.minutes <= limit);
}

const res20 = selectResources(resources, 20);
const res0 = selectResources(resources, 0);

console.log("Результат для межі 20:", res20.length, res20);
console.log("Результат для межі 0:", res0.length, res0);