export const genMapLink = (data: any) => {
    return `http://maps.google.com/maps?q=${data?.latitude},${data?.longitude}`
}