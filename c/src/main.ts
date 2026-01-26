
const parse_file = async (source: File, size: number) => {
    const url = URL.createObjectURL(source);
    const image = new Image;
    image.src = url;
    image.width = size;
    image.height = size;
    image.addEventListener("load", () => {
        const canvas = document.createElement("canvas");
        const ctx = canvas.getContext("2d");
        if (!ctx) throw new Error("iouabuifasifbioasngioawog90w9qjg912t");
        canvas.width = size;
        canvas.height = size;
        ctx.drawImage(image, 0, 0, size, size);
        canvas.toBlob((blob) => {
            if (!blob) throw new Error("aabaa");
            const url = URL.createObjectURL(blob);
            const a = document.createElement("a");
            a.href = url;
            a.download = "ra.png";
            a.click();
        });
    });
};

const create_input = () => {
    const wrapper = document.createElement("div");
    const content = document.createElement("input");
    content.type = "file";
    wrapper.append(content);
    document.body.append(wrapper);
    content.addEventListener("input", async () => {
        const file = content.files?.item(0);
        if (!file) throw new Error("aaaaaaaaa");
        await parse_file(file, 1 << 11);
    });
};

const main = () => {
    create_input();
};

main();