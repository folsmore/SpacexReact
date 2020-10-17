export default class GetData {

    statusUrl = 'https://api.spacexdata.com/v4/';
    getResource = async url => {
        const res = await fetch(url);

        if (!res.ok) {
            throw new Error(`Произошла ошибка ${res.status}`);
        }

        return await res.json();

    };

    getRocket = async () => 
        await this.getResource(this.statusUrl + 'rockets');

    getLaunches = async () => 
        await this.getResource(this.statusUrl + 'launches/past');

    getCompany = async () => 
        await this.getResource(this.statusUrl + 'company');

}