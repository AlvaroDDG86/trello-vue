import { UID } from "../utils/idGenerator"
const data = {
    columns: [
        {
            id: UID(),
            title: 'Planning',
            tasks: [
                {
                    title: 'Task 1',
                    description: 'Some activity',
                    id: UID()
                }
            ]
        },
        {
            id: UID(),
            title: 'Develop',
            tasks: [
                {
                    title: 'Task 2',
                    description: 'Trying new things',
                    id: UID()
                },
                {
                    title: 'Task 2',
                    description: null,
                    id: UID()
                }
            ]
        },
        {
            id: UID(),
            title: 'Test',
            tasks: [
                {
                    title: 'Task 3',
                    description: null,
                    id: UID()
                },
                {
                    title: 'Task 4',
                    description: 'Trying new things',
                    id: UID()
                }
            ]
        },
        {
            id: UID(),
            title: 'Done',
            tasks: [
                {
                    title: 'Task 5',
                    description: 'Trying new things',
                    id: UID()
                },
                {
                    title: 'Task 6',
                    description: 'Trying new things',
                    id: UID()
                }
            ]
        }
    ]
}

export default data