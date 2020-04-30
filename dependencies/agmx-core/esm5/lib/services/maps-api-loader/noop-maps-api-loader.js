/**
 * When using the NoOpMapsAPILoader, the Google Maps API must be added to the page via a `<script>`
 * Tag.
 * It's important that the Google Maps API script gets loaded first on the page.
 */
var NoOpMapsAPILoader = /** @class */ (function () {
    function NoOpMapsAPILoader() {
    }
    NoOpMapsAPILoader.prototype.load = function () {
        if (!window.google || !window.google.maps) {
            throw new Error('Google Maps API not loaded on page. Make sure window.google.maps is available!');
        }
        return Promise.resolve();
    };
    return NoOpMapsAPILoader;
}());
export { NoOpMapsAPILoader };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibm9vcC1tYXBzLWFwaS1sb2FkZXIuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9hZ214LWNvcmUvIiwic291cmNlcyI6WyJsaWIvc2VydmljZXMvbWFwcy1hcGktbG9hZGVyL25vb3AtbWFwcy1hcGktbG9hZGVyLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUVBOzs7O0dBSUc7QUFDSDtJQUFBO0lBUUEsQ0FBQztJQVBDLGdDQUFJLEdBQUo7UUFDRSxJQUFJLENBQU8sTUFBTyxDQUFDLE1BQU0sSUFBSSxDQUFPLE1BQU8sQ0FBQyxNQUFNLENBQUMsSUFBSSxFQUFFO1lBQ3ZELE1BQU0sSUFBSSxLQUFLLENBQ1gsZ0ZBQWdGLENBQUMsQ0FBQztTQUN2RjtRQUNELE9BQU8sT0FBTyxDQUFDLE9BQU8sRUFBRSxDQUFDO0lBQzNCLENBQUM7SUFDSCx3QkFBQztBQUFELENBQUMsQUFSRCxJQVFDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtNYXBzQVBJTG9hZGVyfSBmcm9tICcuL21hcHMtYXBpLWxvYWRlcic7XG5cbi8qKlxuICogV2hlbiB1c2luZyB0aGUgTm9PcE1hcHNBUElMb2FkZXIsIHRoZSBHb29nbGUgTWFwcyBBUEkgbXVzdCBiZSBhZGRlZCB0byB0aGUgcGFnZSB2aWEgYSBgPHNjcmlwdD5gXG4gKiBUYWcuXG4gKiBJdCdzIGltcG9ydGFudCB0aGF0IHRoZSBHb29nbGUgTWFwcyBBUEkgc2NyaXB0IGdldHMgbG9hZGVkIGZpcnN0IG9uIHRoZSBwYWdlLlxuICovXG5leHBvcnQgY2xhc3MgTm9PcE1hcHNBUElMb2FkZXIgaW1wbGVtZW50cyBNYXBzQVBJTG9hZGVyIHtcbiAgbG9hZCgpOiBQcm9taXNlPHZvaWQ+IHtcbiAgICBpZiAoISg8YW55PndpbmRvdykuZ29vZ2xlIHx8ICEoPGFueT53aW5kb3cpLmdvb2dsZS5tYXBzKSB7XG4gICAgICB0aHJvdyBuZXcgRXJyb3IoXG4gICAgICAgICAgJ0dvb2dsZSBNYXBzIEFQSSBub3QgbG9hZGVkIG9uIHBhZ2UuIE1ha2Ugc3VyZSB3aW5kb3cuZ29vZ2xlLm1hcHMgaXMgYXZhaWxhYmxlIScpO1xuICAgIH1cbiAgICByZXR1cm4gUHJvbWlzZS5yZXNvbHZlKCk7XG4gIH1cbn1cbiJdfQ==