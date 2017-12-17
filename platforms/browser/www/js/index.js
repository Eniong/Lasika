
         let val = 0;

        function shift(src_id, dst_id, from, to) {
            val = 0;
            let src = document.getElementById(src_id);
            let dst = document.getElementById(dst_id);
            dst.innerHTML = chords.shiftScale(src, from, to);
        }

        function shiftPlus(src_id, dst_id) {
            val += 1;
            let src = document.getElementById(src_id);
            let dst = document.getElementById(dst_id);
            dst.innerHTML = chords.shiftScaleBy(src, val);
        }

        function shiftMinus(src_id, dst_id) {
            val -= 1;
            let src = document.getElementById(src_id);
            let dst = document.getElementById(dst_id);
            dst.innerHTML = chords.shiftScaleBy(src, val);
        }

        function parse(src_id, dst_id) {
            val = 0;
            let src = document.getElementById(src_id);
            let dst = document.getElementById(dst_id);
            dst.innerHTML = chords.parse(src);
        }