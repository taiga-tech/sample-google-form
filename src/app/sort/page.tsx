'use client'
import { useState, useCallback } from 'react'

const data = [
    {
        id: 1,
        text: 'text1',
        order: 3,
    },
    {
        id: 2,
        text: 'text2',
        order: 1,
    },
]

const Page = () => {
    const [items, setItems] = useState(data)

    const sortItem = useCallback(
        (itemId: number, direction: string) => {
            setItems((prev) =>
                prev.map((item) => {
                    if (item.id === itemId) {
                        if (direction === 'up') {
                            return { ...item, order: item.order - 1 }
                        } else if (direction === 'down') {
                            return { ...item, order: item.order + 1 }
                        }
                    }
                    return item
                })
            )
        },
        [items]
    )

    return (
        <div className="p-5">
            <div className="overflow-x-auto">
                <table className="table table-zebra mx-auto w-fit">
                    <thead>
                        <tr>
                            <th>Id</th>
                            <th>Name</th>
                            <th>Order</th>
                            <th>Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                        {items
                            .sort((a, b) => a.order - b.order)
                            .map((item) => (
                                <tr key={item.id}>
                                    <th>{item.id}</th>
                                    <td>{item.text}</td>
                                    <td>{item.order}</td>
                                    <td className="flex gap-2">
                                        <button
                                            className="btn btn-outline btn-sm"
                                            onClick={() =>
                                                sortItem(item.id, 'up')
                                            }
                                        >
                                            上へ
                                        </button>
                                        <button
                                            className="btn btn-outline btn-sm"
                                            onClick={() =>
                                                sortItem(item.id, 'down')
                                            }
                                        >
                                            下へ
                                        </button>
                                    </td>
                                </tr>
                            ))}
                    </tbody>
                </table>
            </div>
        </div>
    )
}

export default Page
