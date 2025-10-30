export default function VlMap() {
    return (
    <div style={{ width: '100%', margin: '40px 0' }}>
        <iframe 
        src="https://www.vl.ru/off/map/common?stop-fullscreen-on-mobile=1&iframe=" 
        style={{ border: 'none', width: '100%', height: '500px', borderRadius: '10px' }}
        title="Карта отключений VL.ru"
        />
    </div>
    );
}