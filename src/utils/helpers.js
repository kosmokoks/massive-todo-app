const getFormData = (object) => {
    const formData = new FormData();
    Object.keys(object).forEach(key => formData.append(key, object[key]));
    return formData;
}

export const fetchUrl = 'https://react.massivepixel.io/api/bogacz.piotr'

export const updateTodoTask = (task) => {
    return fetch(fetchUrl, {
        method: 'post',
        body: getFormData(task)
    });
}

export const toggleTodoTask = (task) => {
    return fetch(`${fetchUrl}/${task.id}`, {
        method: 'post',
        body: getFormData(task)
    });
}
