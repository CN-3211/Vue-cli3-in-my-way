<template>
  <div id="map" style="width: 500px; height: 500px;"></div>
</template>

<script>
import 'mapbox-gl/dist/mapbox-gl.css'
import mapboxgl from 'mapbox-gl/dist/mapbox-gl';
import { getHTgeo } from '~api';
import { root } from '~api/axios';

export default {
  data() {
    return {
      filterStr: "(swle LIKE '%一级%' or swle LIKE '二级' or swle LIKE '%三级') AND (b LIKE 1 or b LIKE '2%' or b LIKE 3) AND (b LIKE 1 or b LIKE 2 or b LIKE 3)",
      filterStr2: "(asdas LIKE '12334' or sdad LIKE '2344' or dsadaf LIKE '4567') AND (b LIKE 1 or b LIKE 2 or b LIKE 3)"
    }
  },
  mounted() {
    let obj = { a: 1, b: 2, c: 3 };
    obj.a = 4;
    console.log('obj :', obj);
    mapboxgl.accessToken = 'pk.eyJ1IjoiY24zMjExIiwiYSI6ImNrMjlzanNuYjE1Z3MzaG82ZnFiZXZrNm4ifQ.uxIqDHNiTvetqmEJb28kGw';
    var map = new mapboxgl.Map({
      container: 'map',
      style: 'mapbox://styles/mapbox/streets-v11',
      center: [120, 30],
      zoom: 10,
      pitch: 45,
      antialias: true
    });
    map.on('load', () => {
      map.addLayer({
          "id": "route",
          "type": "line",
          "source": {
            "type": "geojson",
            "data": `HT.geojson`
          },
          "layout": {
            "line-join": "round",
            "line-cap": "round"
          },
          "paint": {
            "line-color": "red",
            "line-width": 6
          }
        })
        map.on('click', 'route', function (e) {
          console.log(e.features)
          var coordinates = e.features[0].geometry.coordinates.slice();
          var description = e.features[0].properties.description;
          
          // Ensure that if the map is zoomed out such that multiple
          // copies of the feature are visible, the popup appears
          // over the copy being pointed to.
          while (Math.abs(e.lngLat.lng - coordinates[0]) > 180) {
          coordinates[0] += e.lngLat.lng > coordinates[0] ? 360 : -360;
          }
          
          new mapboxgl.Popup()
          .setLngLat(coordinates)
          .setHTML(description)
          .addTo(map);
        });
    });
  },
  methods: {
    SQLToMap(sqlStr) {
      let str = sqlStr.replace(/\(|\)|\s|'|"/g,"");
      let arr = [];
      str.split('AND').forEach(one => {
        arr.push(one);
      })
      let mapArr = arr.map(item => {
        let sqlMap = [];
        sqlMap.push(item.split('or').map(res => res.split('LIKE')[0]));
        sqlMap.push(item.split('or').map(res => {
          let val = res.split('LIKE')[1];
          if (/^\%/.test(val) && /\%$/.test(val)) {
            val = val.replace(/^\%/, '');
            val = val.replace(/\%$/, '');
            return new RegExp(val + '');
          } else if (/^\%/.test(val)) {
            val = val.replace(/^\%/, '');
            val = val.replace(/\%$/, '');
            return new RegExp('(.*?)' + val + '$');
          } else if (/\%$/.test(val)) {
            val = val.replace(/^\%/, '');
            val = val.replace(/\%$/, '');
            return new RegExp('^' + val + '(.*?)');
          } else {
            return new RegExp('^' + val + '$');
          }
        }));
        return sqlMap;
      });
      return new Map(mapArr);
    }
  }
}
// [[a, a, a], [1, 2, 3]]
// [[b, b ,b], [1, 2, 3]]
</script>

<style>

</style>