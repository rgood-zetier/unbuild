export type Course = {
    name: string;
    description: string;
    difficulty: 'Novice' | 'Practitioner' | 'Advanced';
    tags?: string[];
}

export const courses: Course[] = [
    {
        name: 'Creating Structures',
        description: 'Learn the fundamentals of creating and applying structures.',
        difficulty: 'Novice',
        tags: ['fundamentals'],
    },
    {
        name: 'PCode for Pattern Analysis',
        description: 'Use the Ghidra script API to examine PCode for architecture agnostic pattern analysis',
        difficulty: 'Practitioner',
        tags: ['pcode', 'scripting']
    }
]