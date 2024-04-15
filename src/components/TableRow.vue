<template>
    <tr>
        <th>{{detail}}: </th>
        <td>{{value}}</td>
    </tr>
</template>

<script>
export default{
    name: 'TableRow',
    props: {
        detail: {
            type: String,
            required: true
        },
        value: {
            type: String,
            required: true
        }
    }
}
</script>