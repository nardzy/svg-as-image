
const parse_file = async (source: File, size: number) => {
    const url = URL.createObjectURL(source);
    const image = new Image;
    image.src = url;
    image.width = size;
    image.height = size;
    document.body.append(image);
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
        await parse_file(file, 1024);
    });
};

const main = () => {
    create_input();
};

main();