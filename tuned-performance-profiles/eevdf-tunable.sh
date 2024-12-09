#!/bin/bash
. /usr/lib/tuned/functions

start() {
    # Do nothing if BORE scheduler is used
    [ -e /proc/sys/kernel/sched_bore ] && return

    # Tune EEVDF for interactivity
    # See: https://github.com/torvalds/linux/commit/9e5b04df7190ab4750ae3c67714fd537ef4d79f5
    local ncpus=$(($(nproc) - 1))
    local slice="$(gawk 'BEGIN {print '"400000 * (1 + int(log($ncpus) / log(2)))"'}')"
    local migration_cost_ns=250000
    local migrate=8
    local sched_cfs_bandwidth_slice_us=3000

    save_set_sys eevdf_tunable_slice /sys/kernel/debug/sched/base_slice_ns "$slice"
    save_set_sys eevdf_tunable_migration_cost /sys/kernel/debug/sched/migration_cost_ns "$migration_cost_ns"
    save_set_sys eevdf_tunable_nr_migrate /sys/kernel/debug/sched/nr_migrate "$migrate"
    save_set_sys cfs_bandwidth_slice_us /proc/sys/kernel/sched_cfs_bandwidth_slice_us "$sched_cfs_bandwidth_slice_us"


    return 0
}

stop() {
    # Do nothing if BORE scheduler is used
    [ -e /proc/sys/kernel/sched_bore ] && return

    restore_sys eevdf_tunable_slice /sys/kernel/debug/sched/base_slice_ns
    restore_sys eevdf_tunable_migration_cost /sys/kernel/debug/sched/migration_cost_ns
    restore_sys eevdf_tunable_nr_migrate /sys/kernel/debug/sched/nr_migrate
    restore_sys cfs_bandwidth_slice_us /proc/sys/kernel/sched_cfs_bandwidth_slice_us

    return 0
}

process "$@"
