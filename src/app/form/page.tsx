const Page = () => {
    return (
        <div className="h-screen w-screen">
            <form
                action="https://docs.google.com/forms/u/0/d/e/1FAIpQLSdRNUX67fVzzIQgEjfprup8eEk1MuV2GVkqnhGohvfjcbU8bA/formResponse"
                method="POST"
                className="grid gird-col-1 mt-8 max-w-md mx-auto gap-4 px-4"
                target="hidden_iframe"
            >
                <h1 className="text-xl font-bold">サンプルアンケート</h1>

                <label className="block">
                    <span className="text-gray-700">お名前</span>
                    <input
                        type="text"
                        name="entry.710131568"
                        className="mt-1 block w-full rounded"
                    />
                </label>
                <label className="block">
                    <span className="text-gray-700">メールアドレス</span>
                    <input
                        type="email"
                        name="entry.432954544"
                        className="mt-1 block w-full rounded"
                        placeholder="john@example.com"
                    />
                </label>
                <label className="block">
                    <span className="text-gray-700">メッセージ</span>
                    <textarea
                        className="mt-1 block w-full rounded"
                        name="entry.1186372403"
                    ></textarea>
                </label>
                <input
                    type="submit"
                    className="border rounded bg-blue-500 py-2 px-4 text-white"
                />
            </form>
        </div>
    )
}

export default Page
