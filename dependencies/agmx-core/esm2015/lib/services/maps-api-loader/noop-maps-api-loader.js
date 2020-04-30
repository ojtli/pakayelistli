/**
 * When using the NoOpMapsAPILoader, the Google Maps API must be added to the page via a `<script>`
 * Tag.
 * It's important that the Google Maps API script gets loaded first on the page.
 */
export class NoOpMapsAPILoader {
    load() {
        if (!window.google || !window.google.maps) {
            throw new Error('Google Maps API not loaded on page. Make sure window.google.maps is available!');
        }
        return Promise.resolve();
    }
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibm9vcC1tYXBzLWFwaS1sb2FkZXIuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9hZ214LWNvcmUvIiwic291cmNlcyI6WyJsaWIvc2VydmljZXMvbWFwcy1hcGktbG9hZGVyL25vb3AtbWFwcy1hcGktbG9hZGVyLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUVBOzs7O0dBSUc7QUFDSCxNQUFNLE9BQU8saUJBQWlCO0lBQzVCLElBQUk7UUFDRixJQUFJLENBQU8sTUFBTyxDQUFDLE1BQU0sSUFBSSxDQUFPLE1BQU8sQ0FBQyxNQUFNLENBQUMsSUFBSSxFQUFFO1lBQ3ZELE1BQU0sSUFBSSxLQUFLLENBQ1gsZ0ZBQWdGLENBQUMsQ0FBQztTQUN2RjtRQUNELE9BQU8sT0FBTyxDQUFDLE9BQU8sRUFBRSxDQUFDO0lBQzNCLENBQUM7Q0FDRiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7TWFwc0FQSUxvYWRlcn0gZnJvbSAnLi9tYXBzLWFwaS1sb2FkZXInO1xuXG4vKipcbiAqIFdoZW4gdXNpbmcgdGhlIE5vT3BNYXBzQVBJTG9hZGVyLCB0aGUgR29vZ2xlIE1hcHMgQVBJIG11c3QgYmUgYWRkZWQgdG8gdGhlIHBhZ2UgdmlhIGEgYDxzY3JpcHQ+YFxuICogVGFnLlxuICogSXQncyBpbXBvcnRhbnQgdGhhdCB0aGUgR29vZ2xlIE1hcHMgQVBJIHNjcmlwdCBnZXRzIGxvYWRlZCBmaXJzdCBvbiB0aGUgcGFnZS5cbiAqL1xuZXhwb3J0IGNsYXNzIE5vT3BNYXBzQVBJTG9hZGVyIGltcGxlbWVudHMgTWFwc0FQSUxvYWRlciB7XG4gIGxvYWQoKTogUHJvbWlzZTx2b2lkPiB7XG4gICAgaWYgKCEoPGFueT53aW5kb3cpLmdvb2dsZSB8fCAhKDxhbnk+d2luZG93KS5nb29nbGUubWFwcykge1xuICAgICAgdGhyb3cgbmV3IEVycm9yKFxuICAgICAgICAgICdHb29nbGUgTWFwcyBBUEkgbm90IGxvYWRlZCBvbiBwYWdlLiBNYWtlIHN1cmUgd2luZG93Lmdvb2dsZS5tYXBzIGlzIGF2YWlsYWJsZSEnKTtcbiAgICB9XG4gICAgcmV0dXJuIFByb21pc2UucmVzb2x2ZSgpO1xuICB9XG59XG4iXX0=