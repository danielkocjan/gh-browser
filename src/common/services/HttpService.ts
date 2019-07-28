import camelCaseKeys from 'camelcase-keys';

export class HttpService {
    public get<R>(url: string) {
        return this.makeRequest<R>(url);
    }

    private async makeRequest<R>(url: string, options?: RequestInit): Promise<R> {
        return fetch(url, options)
            .then(res => res.json())
            .then(res => (camelCaseKeys(res) as unknown) as R);
        // todo: use another lib or own solution for camelCasing response
    }
}
