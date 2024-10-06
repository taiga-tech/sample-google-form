const Page = () => {
    return (
        <div className="h-screen w-screen">
            <form
                action="https://docs.google.com/forms/u/0/d/e/1FAIpQLSdRNUX67fVzzIQgEjfprup8eEk1MuV2GVkqnhGohvfjcbU8bA/formResponse"
                method="POST"
                className="grid gird-col-1 mt-8 max-w-md mx-auto gap-4 px-4"
                target="hidden_iframe"
            >
                <h1 className="font-bold">サンプルアンケート</h1>
                <label className="block">
                    <span>記述</span>
                    <input
                        type="text"
                        name="entry.710131568"
                        className="mt-1 block w-full rounded"
                    />
                </label>

                <label className="block">
                    <span>メールアドレス</span>
                    <input
                        type="email"
                        name="entry.432954544"
                        className="mt-1 block w-full rounded"
                        placeholder="john@example.com"
                    />
                </label>

                <label className="block">
                    <span>テキストエリア</span>
                    <textarea
                        className="mt-1 block w-full rounded"
                        name="entry.1186372403"
                    ></textarea>
                </label>

                <label className="block">
                    <span>ラジオボタン</span>

                    <div className="grid">
                        <div>
                            <input
                                type="radio"
                                name="entry.1462327940"
                                value="ラジオ 1"
                            />
                            <span>ラジオ 1</span>
                        </div>
                        <div>
                            <input
                                type="radio"
                                name="entry.1462327940"
                                value="ラジオ 2"
                            />
                            <span>ラジオ 2</span>
                        </div>
                    </div>
                </label>

                <label className="block">
                    <span>チェックボックス</span>

                    <div className="grid">
                        <label>
                            <input
                                type="checkbox"
                                name="entry.1195109751"
                                value="チェックボックス 1"
                            />
                            <span>チェックボックス 1</span>
                        </label>
                        <label>
                            <input
                                type="checkbox"
                                name="entry.1195109751"
                                value="チェックボックス 2"
                            />
                            <span>チェックボックス 2</span>
                        </label>
                    </div>
                </label>

                <label className="block">
                    <span>選択</span>
                    <select
                        className="grid w-full rounded-md"
                        name="entry.1484951544"
                    >
                        <option value="選択肢 1">select 選択肢 1</option>
                        <option value="選択肢 2">select 選択肢 2</option>
                    </select>
                </label>

                <label className="block">
                    <span>評価</span>
                    <div className="grid grid-cols-5 gap-2">
                        <div className="grid justify-center items-center">
                            <span>1</span>
                            <input
                                type="radio"
                                name="entry.891513224"
                                value="1"
                            />
                        </div>
                        <div className="grid justify-center items-center">
                            <span>2</span>
                            <input
                                type="radio"
                                name="entry.891513224"
                                value="2"
                            />
                        </div>
                        <div className="grid justify-center items-center">
                            <span>3</span>
                            <input
                                type="radio"
                                name="entry.891513224"
                                value="3"
                            />
                        </div>
                        <div className="grid justify-center items-center">
                            <span>4</span>
                            <input
                                type="radio"
                                name="entry.891513224"
                                value="4"
                            />
                        </div>
                        <div className="grid justify-center items-center">
                            <span>5</span>
                            <input
                                type="radio"
                                name="entry.891513224"
                                value="5"
                            />
                        </div>
                    </div>
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
